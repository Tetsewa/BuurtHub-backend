// config/cloudinary.config.js

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
    cloud_name: "dvlqkjs7x",
    api_key: "746158259242537",
    api_secret: "T5MXJFH6vCLlz690IhBk1gFFcTU"
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        allowed_formats: ["jpg, png, jpeg, gif, mp4, webm, mov, avi, mkv, m4v, 3gp, flv, mpeg, mpg, ogv, vob, ogg, wmv, divx, xvid, asf, rm, rmvb, mts, m2ts, ts, swf, webp, heic, heif, pdf, doc, docx, ppt, pptx, xls, xlsx, txt, rtf, odt, ods, odp, odg, odf, sxw, sxc, sxi, sxd"],
        folder: "movie-gallery" // The name of the folder in cloudinary
        // resource_type: "raw", // => this is in case you want to upload other types of files, not just images
    }
});

module.exports = multer({ storage });
