import { prisma } from "../../core/configs";

export const PageElement_AmazingOffer = {
  name: "amazingOffer",
  type: "amazingOffer",
  image: "http://localhost:4000/uploads/banner.png",
  args: [
    { required:true, type: "text", title: "عنوان" },
    { max: -1, min: 1, type: "image", title: "تساویر" },
    { max: 2, min: 2, type: "banner", title: "تساویر" }

  ],
};

export const PageElement_NormalBanner = {
  name: "banner",
  type: "banner",
  image: "http://localhost:4000/uploads/banner.png",
  args: [{ max: 1, min: 1, type: "banner", title: "تساویر" }],
};

export const PageElement_Grid2x1 = {
  name: "grid2x1",
  type: "grid2x1",
  image: "http://localhost:4000/uploads/banner.png",
  args: [{ max: 2, min: 2, type: "banner", title: "تساویر" }],
};

const elements = [PageElement_AmazingOffer,
        PageElement_NormalBanner,
        PageElement_Grid2x1];

export async function registerPageElements() {
  try {
    await prisma.pageElement.createMany({
      data: elements
    });
  } catch (e) {}
}

export async function updatePageElements() {
  try {
  elements.forEach(async(e)=>{
    await prisma.pageElement.update({
      where:{type:e.type},
      data:e
    });
  })
    await prisma.pageElement.updateMany({
      data: [
        PageElement_AmazingOffer,
        PageElement_NormalBanner,
        PageElement_Grid2x1,
      ],
    });
  } catch (e) {}
}
