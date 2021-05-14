import { InjectRepository } from "typeorm-typedi-extensions";
import { Workdays } from "../entities/Workdays";
import { Repository } from "typeorm";
import { Service } from "typedi";
import { App } from "../utils/App";
@Service()
export class WorkdaysService {
    @InjectRepository(Workdays)
    private workdaysRepository: Repository<Workdays>;

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

    async searchNumbers(reqdata: any) {
        try {
            let data = await this.workdaysRepository.find({
                select: ["dayNum"],
                where: reqdata
            });

            return data.map((item) => item.dayNum);
        } catch (error) {
            throw error;
        }
    }

    async save(items: Workdays[]) {
        try {
            let cond = await this.validate(items);
            if (cond == true) {
                let data: any = await this.workdaysRepository.save(items);
                let returnData = { message: "SAVED_SUCCESSFULLY" };
                return returnData;
            } else {
                throw { message: "INVALID_DATA" };
            }
        } catch (error) {
            throw error;
        }
    }

    async validate(items: Workdays[]) {
        items.forEach(item => {
            if (!item.id) {
                item.id = App.UniqueCode();
            }
        })
        return true;
    }


}