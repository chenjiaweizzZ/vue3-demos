import { ref } from "vue";
import { useRouter } from "vue-router";

interface Route {
    name: string,
    path: string
}

export const useIndexRoute = () => {
    const router = useRouter();
    const list = ref([
        { name: "聊天室", path: "/chat" },
        { name: "css走马灯", path: "/horse" },
        { name: "封装confirm", path: "/beforeConfirm" },
        { name: "threejs练习", path: "/three" },
        { name: "threejs-hello", path: "/helloThree" }
    ]);
    const toPath = (route: Route) => {
        router.push({
            path: route.path,
        });
    };
    return { list, toPath }
}

