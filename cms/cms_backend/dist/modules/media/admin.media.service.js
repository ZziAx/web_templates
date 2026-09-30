import { prisma } from "../../core/configs";
class MediaService {
    static async getManyTemplate(medias) {
        return medias.map((m) => {
            return {
                name: m.filename,
                size: m.size,
                path: m.path,
                type: m.mimetype.startsWith("image/") ? "IMAGE" : "",
            };
        });
    }
    static async createMany(medias) {
        await prisma.media.createMany({
            data: await this.getManyTemplate(medias),
        });
    }
}
export default MediaService;
//# sourceMappingURL=admin.media.service.js.map