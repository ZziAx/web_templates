import { prisma } from "../../core/configs";

class MediaService {
    static async getManyTemplate(medias:any){
        return medias.map((m: any) => {
          return {
            name: m.filename,
            size: m.size,
            path: m.path,
            type: m.mimetype.startsWith("image/") ? "IMAGE" : "",
          };
        });

    }
  static async createMany(medias: any) {
   await  prisma.media.createMany({
      data: await this.getManyTemplate(medias),
    });
  }
}


export default MediaService;