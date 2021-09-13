const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models");

const avatarsdDir = path.join(__dirname, "../../", "public/avatars");

const updateAvatar = async (req, res) => {
  const { id } = req.user;
  const { path: tempPath, originalname } = req.file;
  const uploadPath = path.join(avatarsdDir, id, originalname);

  try {
    const file = await Jimp.read(tempPath);
    await file.resize(250, 250).quality(60).greyscale().write(tempPath);
    await fs.rename(tempPath, uploadPath);

    const avatarURL = `/avatars/${id}/${originalname}`;
    await User.findByIdAndUpdate(id, { avatarURL });

    res.json({
      status: "success",
      code: 200,
      data: {
        result: avatarURL,
      },
    });
  } catch (error) {
    await fs.unlink(tempPath);
    throw error;
  }
};

module.exports = updateAvatar;
