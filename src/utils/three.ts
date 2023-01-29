// interface  threeConstr<T, K extends keyof T> {

//     scene: THREE.Scene | any;
//     camera: THREE.PerspectiveCamera | any ;
//     renderer: THREE.WebGLRenderer | any ;
//     ambientLight: THREE.AmbientLight | any;
//     mesh: Array<K> | any;
// }

import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
// import { JSONLoader } from 'three/examples/jsm/loaders/JSONLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Object3D } from 'three'

export const THREELOADER = (pathArr:Array<string>) => {
  // 各类loader实例
  let jsonLoader = new THREE.ObjectLoader()
  let fbxLoader = new FBXLoader()
  let mtlLoader = new MTLLoader()
  let objLoader = new OBJLoader()
  let gltfLoader = new GLTFLoader()
  let basePath:string, pathName:string, pathFomat
  if (Object.prototype.toString.call(pathArr) !== '[object Array]') {
    pathArr = new Array(1).fill(pathArr.toString())
  }
  let promiseArr = pathArr.map((path) => {
    // 模型基础路径
    basePath = path.substring(0, path.lastIndexOf('/') + 1)
    // 模型名称
    pathName = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
    // 后缀为js或json的文件统一当做js格式处理
    pathName = pathName === 'json' ? 'js' : pathName
    // 模型格式
    pathFomat = path.substring(path.lastIndexOf('.') + 1).toLowerCase()
    // console.log('pathFomat', pathFomat)
    switch (pathFomat) {
    //   case 'js':
    //     return new Promise(function (resolve) {
    //       jsonLoader.load(path, (geometry:any, material:any) => {
    //         resolve({
    //           // 对于js文件，加载到的模型与材质分开放置
    //           geometry: geometry,
    //           material: material,
    //         })
    //       })
    //     })
    //     break
      case 'fbx':
        return new Promise(function (resolve) {
          fbxLoader.load(path, (object) => {
            resolve(object)
          })
        })
        break
      case 'obj':
        return new Promise(function (resolve) {
          objLoader.load(path, (object) => {
            resolve(object)
          })
        })
        break
      case 'mtl':
        return new Promise(function (resolve) {
          mtlLoader.setPath(basePath)
          mtlLoader.load(pathName + '.mtl', (mtl) => {
            resolve(mtl)
          })
        })
        break
      case 'objmtl':
        return new Promise(function (resolve, reject) {
          mtlLoader.setPath(basePath)
          mtlLoader.load(`${pathName}.mtl`, (mtl) => {
            mtl.preload()
            objLoader.setMaterials(mtl)
            objLoader.setPath(basePath)
            objLoader.load(pathName + '.obj', resolve, undefined, reject)
          })
        })
        break
      case 'gltf':
        return new Promise(function (resolve, reject) {
          gltfLoader.load(
            path,
            (gltf) => {
              const { scene } = gltf
              resolve(scene)
            },
            undefined,
            function (error) {
              reject(error)
            }
          )
        })
        break
      case 'glb':
        return new Promise(function (resolve, reject) {
          gltfLoader.load(
            path,
            (gltf) => {
              const { scene } = gltf
              resolve(scene)
            },
            undefined,
            function (error) {
              reject(error)
            }
          )
        })
        break
      default:
        return ''
    }
  })
  return Promise.all(promiseArr)
}
