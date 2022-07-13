import router from "@/routers/router"

router.beforeEach((to, from, next) => {
    // console.log(to, from, next)
    return next();
})

// router.afterEach(() => {
// })

export default router