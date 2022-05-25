import Login from '@/views/login/Login.vue';
import Orders from '@/views/order/orders/OrdersView.vue';
import OrderDetail from '@/views/order/order/OrderDetail.vue'

const routes = [
    {
      path: '/',
      name: 'Orders',
      component: Orders,
      title: 'Orders',
      meta: { requiredAuth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      title: 'Login',
      meta: { requiredAuth: false}
    },
    {
      path: '/orderdetail',
      name: 'Order Detail',
      component: OrderDetail,
      title: 'Order Detail',
      meta: { requiredAuth: true}
    },


]

  export default routes;