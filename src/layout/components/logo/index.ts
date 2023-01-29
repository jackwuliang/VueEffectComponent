import * as THREE from "three";
import { sRGBEncoding } from 'three'
import { THREELOADER } from "@/utils/three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default class ThreeJs {
    scene: THREE.Scene | null = null; // 场景
    camera: THREE.PerspectiveCamera | null = null; // 摄像头
    renderer: THREE.WebGLRenderer | null = null; // 渲染器
    ambientLight: THREE.AmbientLight | null = null; // 灯光
    mesh: Array<any> | false = []; // 模型

    HEIGHT: number = 500;
    WIDTH: number = 500;

    constructor() {
        this.init();
    }

    init(): void {
        // 第一步新建一个场景
        this.scene = new THREE.Scene();

        this.setCamera();
        this.setRenderer();
        this.setCube();
        this.animate();
        this.setLight()
    }

    // 新建透视相机
    setCamera(): void {
        // 第二参数就是 长度和宽度比 默认采用浏览器  返回以像素为单位的窗口的内部宽度和高度
        // 这个地方的高度要适合于对应的dom中去；
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.WIDTH / this.HEIGHT,
            0.1,
            1000
        );
        this.camera.position.z = 900;
        this.camera.position.x = -100;
        this.camera.position.y = 100;
        this.camera.rotation.x = 0.3
        this.camera.rotation.y = -0.1
        this.camera.rotation.z = 0.2

        // console.log(this.camera,'camera')
    }


    // 设置渲染器
    setRenderer(): void {
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        // 设置画布的大小
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        // 物理光线
        this.renderer.physicallyCorrectLights = true;
        // 重要渲染引擎
        this.renderer.outputEncoding = sRGBEncoding
        this.renderer.shadowMap.enabled = true;
        // this.renderer.shadowMapSoft = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        //这里 其实就是canvas 画布  renderer.domElement
        // document.body.appendChild(this.renderer.domElement);
    }

    // 设置环境光
    setLight(): void {
        if (this.scene) {
            console.log('223232423423')
            this.ambientLight = new THREE.AmbientLight(0xFD2424); // 环境光
            this.scene.add(this.ambientLight);
            const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);
            this.scene.add(hemisphereLight);
        }
    }

    // 创建网格模型
    setCube(): void {
        if (this.scene) {
            const geometry = new THREE.BoxGeometry(); //创建一个立方体几何对象Geometry
            // const material = new THREE.MeshBasicMaterial({ color: 0xff3200 }); //材质对象Material
            // const texture = new THREE.TextureLoader()
            const material = new THREE.MeshBasicMaterial({ color: 0x1C2E5C }); //然后创建一个phong材质来处理着色，并传递给纹理映射
            // this.mesh.add(new THREE.Mesh(geometry, material)); //网格模型对象Mesh

            // 直接通过导入
            const loaderpath = ["../models/AI/AI.fbx"]
            THREELOADER(loaderpath).then((res:any) => {
                console.log('3d', res[0])
                // console.log('obj3D', this.modelImportArr(res))
                // this.mesh = this.modelImportArr(res)
                // this.modelImportArr(res).forEach((ittemMesh) => this.scene?.add(ittemMesh))
                this.scene?.add(res[0])
                const mixer = new THREE.AnimationMixer( res[0] );
				mixer.clipAction( res[0].animations[0] ).setDuration( 1 ).play();
                // mesh.center()
                if (!this.mesh) {
                    alert("模型有问题；去找找看吧")
                }
            });

            // this.scene.add(this.mesh); //网格模型添加到场景中
            this.render();
        }
    }

    // 模型导入中过多分组问题
    modelImportArr = (models: Array<any>) => {
        const mesh: Array<any> = []
        const meshArrTran = (item: any) => {
            const { type, children, ...rest } = item
            if (type !== "Group") {
                mesh.push(item)
                return
            }
            if (type === "Group" && children) children.forEach(meshArrTran)
        }
        models.forEach(meshArrTran)
        return mesh
    }

    // 渲染
    render(): void {
        if (this.renderer && this.scene && this.camera) {
            // const controls = new OrbitControls( this.camera, this.renderer.domElement );
            // controls.minDistance = 30;
            // 最大视角距离
            // controls.maxDistance = 300;
            this.renderer.render(this.scene, this.camera);
        }
    }

    // 动画
    animate(): void {
        if (this.mesh) {
            requestAnimationFrame(this.animate.bind(this));
            // this.mesh.rotation.x += 0.01;
            // this.mesh.rotation.y += 0.01;
            this.render();
        }
    }

}