import Login from "@/views/login/Login.vue";
import Orders from "@/views/order/orders/OrdersView.vue";
import OrderDetail from "@/views/order/orderdetail/OrderDetailView.vue";
import OrderRegistrationView from "@/views/order/orderregistrationview/OrderRegistrationView.vue";

const routes = [
  {
    path: "/",
    redirect: "/orders",
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
    title: "Orders",
    meta: { requiredAuth: true },
  },
  {
    path: "/orderregistration",
    name: "Order Registration",
    component: OrderRegistrationView,
    title: "Order Registration",
    meta: { requiredAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    title: "Login",
    meta: { requiredAuth: false },
  },
  {
    path: "/orderdetail",
    name: "Order Detail",
    component: OrderDetail,
    title: "Order Detail",
    meta: { requiredAuth: true },
  },
];

export default routes;
