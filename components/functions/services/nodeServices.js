const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
const baseURL = 'http://localhost:1337'
const pubPath = `${process.cwd()}/public`
export const getStrapiURLs = async () => {
  const preStrapiImagesArray = await fetch(`${baseURL}/upload/files`)
  const strapiImagesArray = await preStrapiImagesArray.json()
  return strapiImagesArray.map(i => i.url.slice(i.url.lastIndexOf('/') + 1 ))
}

export const deleteFile = (id) => {
  fs.unlinkSync(`${pubPath}/${id}`)
}

export const saveFile = async (id) => {

  const img = await fetch(`${baseURL}/uploads/${id}`)
  const ws = fs.createWriteStream(`${pubPath}/${id}`)
  await img.body.pipe(ws)

}