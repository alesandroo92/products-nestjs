import mongoose from "mongoose";


export const ProductSchema = new mongoose.Schema({

  product: { type: String, required: true}, 
  description: { type: String, required: true},
  price: { type: Number, required: true},
  createdAt: { type: Date, default: Date.now}

})