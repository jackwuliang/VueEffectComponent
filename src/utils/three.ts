import * as THREE from "three";

interface  threeConstr<T, K extends keyof T> {

    scene: THREE.Scene | any;
    camera: THREE.PerspectiveCamera | any ;
    renderer: THREE.WebGLRenderer | any ;
    ambientLight: THREE.AmbientLight | any;
    mesh: Array<K> | any;
}

class threeConstrtion {

}

export default class ThreeJs extends threeConstrtion {
      
    

}