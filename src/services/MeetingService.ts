import { Meetings } from './../entities/Meetings';
import { InjectRepository } from "typeorm-typedi-extensions";
import { Workdays } from "../entities/Workdays";
import { Repository } from "typeorm";
import { Service } from "typedi";
import { App } from "../utils/App";
@Service()
export class MeetingsService {
    @InjectRepository(Meetings)
    private workdaysRepository: Repository<Meetings>;

    constructor() {

    }

    async search(reqdata: any) {
        try {
            let data: any = await this.workdaysRepository.find({
                where: reqdata
            })
            return data;
        } catch (error) {
            throw error;
        }
    }



    async save(item: Meetings) {
        try {
            let cond = await this.validate(item);
            if (cond == true) {
                let data: any = await this.workdaysRepository.save(item);
                let returnData = { message: "SAVED_SUCCESSFULLY" };
                return returnData;
            } else {
                throw { message: "INVALID_DATA" };
            }
        } catch (error) {
            throw error;
        }
    }

    async validate(item: Meetings) {
        if (!item.id) {
            item.id = App.UniqueCode();
        }
        return true;
    }


}