import { ref } from "vue";
import { useRouter } from "vue-router";

interface Route {
    name: string,
    path: string
}

export const useIndexRoute = () => {
    const router = useRouter();
    const list = ref([{ name: "聊天室", path: "chat" }, { name: "走马灯", path: "horse" }, { name: "封装confirm", path: "beforeConfirm" }]);
    const toPath = (route: Route) => {
        router.push({
            path: route.path,
        });
    };
    return { list, toPath }
}

