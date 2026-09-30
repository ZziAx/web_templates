import { prisma } from "../../core/configs.js";
import { Prisma, ProductStatus } from "@prisma/client";
import { PRODUCT_VIEWS } from "./logs.constants.js";

class LogsService {
  

  static async add(name: string) {
    return await prisma.logs.create({
      data: {
        name: name,
      },
    });
  }

  static async get(name: string) {
    return await prisma.logs.findMany({
      where: {
        name: name,
      },
    });
  }

  static async count(name: string) {
    return await prisma.logs.count({
      where: {
        name: name,
      },
    });
  }

  static async lastnDays(name: string, n: number = 1) {
    const now = new Date();
    const begin = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDay() - n,
      now.getHours(),
      now.getMinutes(),
    );
    return await prisma.logs.count({
      where: {
        name: name,
        createdAt: {
          gte: begin, // greater than or equal
          lte: now, // less than or equal
        },
      },
    });
  }

  static async day(name: string, beforeToday: number = 0) {
    const now = new Date();
    const begin = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - beforeToday,
    );
    const end = new Date(
      begin.getFullYear(),
      begin.getMonth(),
      begin.getDate() + 1,
    );

    // console.log("begin end",begin.toLocaleDateString(),end.toLocaleDateString());
    return await prisma.logs.count({
      where: {
        name: name,
        createdAt: {
          gte: begin, // greater than or equal
          lte: end, // less than or equal
        },
      },
    });
  }

  static async grothAndCount(name: string, beforeToday: number = 1) {
    const n1 = await this.day(name, beforeToday);
    const n2 = await this.day(name);

    return {
      count: n2,
      groth: n1 == 0?0:(n2 - n1)/n1,
    };
  }

  static async fromUntilNow(name: string, dayDiffer: number = 1) {
    const now = new Date();
    const begin = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDay() - dayDiffer,
      now.getHours(),
      now.getMinutes(),
    );
    return await prisma.logs.count({
      where: {
        name: name,
        createdAt: {
          gte: begin, // greater than or equal
          lte: now, // less than or equal
        },
      },
    });
  }
}

export default LogsService;
