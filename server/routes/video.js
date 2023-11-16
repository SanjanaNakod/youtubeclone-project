import express from 'express'
import {uploadVideo,getAllvideos} from '../controllers/Video.js'
import {likeController} from '../controllers/like.js'
import {viewController} from '../controllers/views.js'
import {likeVideoController,getAlllikedVideoController,deletelikedVideoController} from '../controllers/likeVideo.js'
import {watchLaterController,getAllwatchLaterController,deletewatchLaterController} from '../controllers/watchLater.js'
import {HistoryController,getAllHistoryController,deleteHistoryController} from '../controllers/History.js'
import upload from '../Helper/fileHelper.js'
import auth from '../middleware/auth.js'


const routes=express.Router();

routes.post("/uploadVideo",auth,upload.single('file'),uploadVideo)
routes.get("/getvideos",getAllvideos)
routes.patch("/like/:id",auth,likeController)
routes.patch("/views/:id",viewController)

routes.post("/likedVideo",auth,likeVideoController)
routes.get("/getAlllikedVideo",getAlllikedVideoController)
routes.delete("/deletelikedVideo/:videoId/:Viewer",auth,deletelikedVideoController)

routes.post("/watchLater",auth,watchLaterController)
routes.get("/getAllwatchLater",getAllwatchLaterController)
routes.delete("/deleteWatchLater/:videoId/:Viewer",auth,deletewatchLaterController)

routes.post("/History",auth,HistoryController)
routes.get("/getAllHistory",getAllHistoryController)
routes.delete("/deleteHistory/:userId",auth,deleteHistoryController)

export default routes; 