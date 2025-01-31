import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://foodDelivery:<123foodDelivery>@cluster0.lsc32.mongodb.net/food-delivery-app').then(()=>console.log("DB Connected"));
   
}
