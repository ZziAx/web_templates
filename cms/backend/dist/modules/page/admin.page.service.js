import { prisma } from "../../core/configs";
import MediaService from "../media/admin.media.service";
export class PageBuilderService {
    static async addPage(req) {
        const { name, uri, title, elements, ids } = req.body;
        const pageDataMap = {
            name: name,
            uri: uri,
            title: title,
            elements: JSON.parse(elements),
            ids: JSON.parse(ids)
            // pageElementId: 1,
        };
        console.log("title is ", title);
        const images = await MediaService.getManyTemplate(req.files);
        const pageDataList = [];
        const files = req.files;
        pageDataMap.elements.forEach((v) => {
            // v ->. { id: '218', contents: [ [ 0 ], [] ] }
            // console.log(v);
            const contents = [];
            v.contents.forEach((c) => {
                const elementContent = [];
                const _c = c.map((v) => {
                    const ids = pageDataMap.ids;
                    const i = ids.findIndex((id) => (id == v));
                    const targetFile = images[i];
                    elementContent.push(targetFile.path);
                });
                contents.push(elementContent);
                return _c;
            });
            const pageData = {
                name: "",
                content: contents,
                pageElementId: parseInt(v.id)
                // element:{
                //   connect:{
                //     id:v.id
                //   }
                // }
            };
            pageDataList.push(pageData);
        });
        // console.log(pageDataList);
        // return;
        const body = {
            name: name,
            uri: uri,
            title: title,
            data: {
                createMany: {
                    data: pageDataList,
                },
                // connect:{
                //     id:pageDataId
                // }
            },
        };
        await prisma.pageBuilder.create({ data: body });
        return body;
    }
    // static async getPages(req:any){
    // }
    static async getElementTypes(req) {
        const p = await prisma.pageElement.findMany({
            select: {
                image: true,
                id: true,
                name: true,
                type: true,
                args: true,
            },
        });
        var m = {};
        p.forEach((v) => {
            m[v.id] = v;
        });
        return m;
    }
    static async getPages(req) {
        const pages = await prisma.pageBuilder.findMany();
        return pages;
    }
    static async deletePage(req) {
        const { id } = req.body;
        console.log("id debug ", req.body);
        await prisma.pageBuilder.delete({
            where: {
                id: id
            }
        });
        return { message: "page successfuly deleted" };
    }
}
//# sourceMappingURL=admin.page.service.js.map