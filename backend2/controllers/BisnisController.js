import Bisnis from "../models/BisnisModel.js";
import path from "path";

export const getBisnis = async(req,res)=>{
    try{
        const response =await Bisnis.findAll();
        res.json(response);
    } catch (error){
        console.log(error.message);
    }
    
}

export const getBisnisById = async(req,res)=>{
    try{
        const response =await Bisnis.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error){
        console.log(error.message);
    }
    
}

export const saveBisnis = async(req,res)=>{
    if(req.files === null) return res.status(400).json({msg:"No File Uploaded"});
    const bisnis = req.body.bisnis;
    const phonebisnis = req.body.phonebisnis;
    const country = req.body.country;
    const province = req.body.province;
    const city = req.body.city;
    const address = req.body.address;
    const pin = req.body.pin;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg:"Invalid Image"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/imageBis/${fileName}`,async(err)=>{
        if(err) return res.status(500).json({msg:err.message});
        try {
            await Bisnis.create({bisnis:bisnis,phonebisnis:phonebisnis,country:country,province:province,city:city,address:address,pin:pin,imagebisnis:fileName,urlbisnis:url});
            res.status(201).json({msg:"Berhasil"});
        } catch (error) {
            console.log(error.message);
        }
    })
    

}