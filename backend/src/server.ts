import express, { request, response } from 'express'
import { PrismaClient, Product } from '@prisma/client'
const prisma = new PrismaClient()
const server = express()

server.use(express.json())
server.get('/product',async(request,response)=>{
    const products = await prisma.product.findMany()
    console.log(products)    
    return response.json(products)
})
server.post('/product',async(request,response)=>{
    console.log(request.body)
    const {description,imageUrl}=request.body as Product
    const product = await prisma.product.create({data:{description,imageUrl}})
    return response.status(201).json(product)
})

server.delete('/product/:id',async(request,response)=>{
    const {id}=request.params
    await prisma.product.delete({where:{id:parseInt(id)}})
    return response.status(204).json()
})

server.listen(3333,()=>{
    console.log('Agora foi')
})

