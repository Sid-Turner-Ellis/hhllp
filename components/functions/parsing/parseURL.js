
export default function(url){
  const lastSlash = url.lastIndexOf('/')
  return url.slice(lastSlash + 1)
}