import { AppDataSource } from "../data-source";
import Band from "../entity/Band";

export const bandRepository = AppDataSource.getRepository(Band)