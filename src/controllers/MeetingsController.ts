import { JsonController, Get, Req, Res, QueryParams, Body, Post } from "routing-controllers";
import { Inject } from "typedi";
import { WorkdaysService } from "../services/WorkdaysService";
import { MeetingsService } from "../services/MeetingService";

@JsonController("/meetings")
export class WorkdaysController {

    @Inject()
    service: MeetingsService;


    @Post("/")
    async save(@Body() body: any,) {
        try {
            let result = null;
            result = await this.service.save(body.data);
            return {data: result};
        } catch (error) {
            console.log(error);
            return {status: "failed", error: error};
        }
    }

    @Get("/")
    async search(@Req() req: any) {
        try {
            let result: any = null;
            let data = req.body && req.body.data ? req.body.body : {}
            result = await this.service.search(data);
            console.log(result)
            return { data: result };
        } catch (error) {
            console.log(error);
            return { status: "failed", error: error };
        }
    }

   
}