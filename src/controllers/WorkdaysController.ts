import { JsonController, Get, Req, Res, QueryParams, Body, Post } from "routing-controllers";
import { Inject } from "typedi";
import { WorkdaysService } from "../services/WorkdaysService";

@JsonController("/workdays")
export class WorkdaysController {

    @Inject()
    service: WorkdaysService;


    @Post("/")
    async save(@Body() body: any,) {
        try {
            let result = null;
            result = await this.service.save(body.data);
            return {data: result};
        } catch (error) {
            console.log(error);
            return {status: 0, error: error};
        }
    }

    @Get("/")
    async search(@Req() req: any) {
        try {
            let result: any = null;
            let data = req.body && req.body.data ? req.body.body : {}
            result = await this.service.search(data);
            return { data: result };
        } catch (error) {
            console.log(error);
            return { status: "failed", error: error };
        }
    }

    @Get("/getdaynos")
    async searchDayNos(@Req() req: any,@QueryParams({required: true}) query: any) {
        try {
            let result: any = null;
            let data = query? query : {}
            result = await this.service.searchNumbers(data);
            return { data: result };
        } catch (error) {
            console.log(error);
            return { status: "failed", error: error };
        }
    }

}