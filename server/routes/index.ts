/**
 * server/routes/index.ts
 *
 * Register the routers to the express app
 *
 * Polar Survey
 * @author Aun Raza (301074590)
 * @author Jamee Kim (301058465)
 * @author Jerome Ching (300817930)
 * @author Sophie Xu (301098127)
 * @author Tien Sang Nguyen (301028223)
 * @author Eunju Jo (301170731)
 */

import { Express } from "express-serve-static-core";

import rootRouter from "./root";
import userRouter from "./user";
import surveyRouter from "./survey";

/**
 * Register all routers to the express app
 */
export default function setRouters(app: Express): void {
    app.use("/", rootRouter);
    app.use("/", userRouter);
    app.use("/", surveyRouter);

}
