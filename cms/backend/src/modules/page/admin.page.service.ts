import { prisma } from "../../core/configs";
import MediaService from "../media/admin.media.service";

export class PageBuilderService {
  static async addPage(req: any) {
    const { name, uri,title, elements,ids } = req.body;
    const pageDataMap = {
      name: name,
      uri:uri,
      title:title,
      elements: JSON.parse(elements),
      ids:JSON.parse(ids)
      // pageElementId: 1,
    };

   
    console.log("title is ",title);
      const images = await MediaService.getManyTemplate(req.files);

      const pageDataList:any = []; 

      const files = req.files;
      pageDataMap.elements.forEach((v:any)=>{
        // v ->. { id: '218', contents: [ [ 0 ], [] ] }
        // console.log(v);
        const contents:any = [];
        v.contents.forEach((c:any)=>{
        const elementContent:any = [];
          const _c = c.map((v:any)=>{
            const ids = pageDataMap.ids;
            const i = ids.findIndex((id:any)=>(id == v));
            const targetFile = images[i];
            elementContent.push(targetFile.path);
          });

          contents.push(elementContent);
          return _c;
        });

        const pageData = {
          name:"",
            content:contents,
            pageElementId:parseInt(v.id)
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
      title:title,
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

  static async getElementTypes(req: any) {
    const p = await prisma.pageElement.findMany({
      select: {
        image: true,
        id: true,
        name: true,
        type: true,
        args: true,
      },
    });

    var m:any = {};

    p.forEach((v)=>{
      m[v.id] = v;
    });


    return m;
  }


  static async getPages(req:any){
    const pages = await prisma.pageBuilder.findMany();
    return pages;
  }

  static async deletePage(req:any){
    const {id} = req.body;
    console.log("id debug ",req.body);

    await prisma.pageBuilder.delete({
      where:{
        id:id
      }
    });

    return {message:"page successfuly deleted"}
  }
}
