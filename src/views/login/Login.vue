<template>
    <div class="container">
        <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
        <div class="login">
            <InputLabel
                label="Usuário"
                placeHolder="Nome do usuário"
                v-model="user.code"
            />
            <InputLabel label="Senha" type="password" v-model="user.password" :placeHolder="'******'" />
            <Button text="Acessar" :callback="signIn" />
        </div>
    </div>
</template>

<script>
import InputLabel from "@/components/inputs/input/InputLabel.vue";
import Button from "@/components/buttons/button/Button.vue";
import User from "@/models/User";
import userService from "@/services/user-service.js";
import Message from "@/utils/messages/message";


export default {
    name: "Login",
    components: {
        InputLabel,
        Button,
    },
    data() {
        return {
            user: new User(),
        };
    },
    methods: {
        opa() {
            alert('opa')
        },
        signIn() {

            if (!this.user.modelValid()) {
                Message.information('warning', '', 'Code and password must be informed');
                return;
            }

            if (!userService.login(this.user.code, this.user.password)) {
                Message.information('warning', '', 'Code or password is invalid!');
                return;
            }

            localStorage.setItem("user", this.user.code);

            this.$router.push({ name: "Orders" });
        },
    },
};
</script>

<style lang="scss" src="./style.scss" scoped />
