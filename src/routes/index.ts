import { Router } from "express";
import env from "../../config/env";
const router: Router = Router();

router.get("/", (req, res) => {
    res.send({
        "message": "Hello, world!"
    })
})

router.get("/hello/:id", (req,res) => {
  res.send({
    "hey": req.params.id
  })
})

export default router;
