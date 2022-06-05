<template>
  <div class="main-container">
    <Title text="Company details" />

    <div class="form-row">
      <div id="identification">
        <InputLabel
          v-bind="identificationData"
          v-model="identificationWithMask"
          autoFocus
        />
      </div>
      <div id="corporate-name">
        <InputLabel_2 label="Corporate name" v-model="enterprise.name" />
      </div>
    </div>
    <div class="form-row">
      <div class="fullsize">
        <InputLabel label="City" v-model="enterprise.city" />
      </div>
      <div class="fullsize">
        <InputLabel label="State" v-model="enterprise.state" />
      </div>
      <div class="fullsize">
        <InputLabel label="Country" v-model="enterprise.country" />
      </div>
    </div>

    <div class="footer">
      <div :class="newRegister ? 'keep-adding' : 'hide-keep-adding'">
        <Checkbox text="Keep adding" v-model="keepAdding" />
      </div>
      <div class="actions">
        <Button text="Save" :callback="saveRegistration" />
        <Button
          text="Cancel"
          :callback="cancelRegistration"
          :secondary="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/titles/title/Title.vue";
import InputLabel from "@/components/inputs/input/InputLabel.vue";
import InputLabel_2 from "@/components/inputs/input/InputLabel_2.vue";
import Button from "@/components/buttons/button/Button.vue";
import Checkbox from "@/components/inputs/checkbox/Checkbox.vue";
import Enterprise from "@/models/Enterprise";
import enterpriseService from "@/services/enterprise-service";
import Message from "@/utils/messages/message";

export default {
  name: "EnterpriseDetail",
  components: {
    Title,
    InputLabel,
    InputLabel_2,
    Button,
    Checkbox,
  },
  data() {
    return {
      enterprise: new Enterprise(),
      keepAdding: true,
      newRegister: true,
      identificationData: {
        label: "Identification (CNPJ)",
        mask: "##.###.###/####-##",
      },
      identificationWithMask: "",
    };
  },
  mounted() {
    this.newRegister = !this.$route.params.id;

    let id = this.$route.params.id;
    if (!id) return;
    this.getEnterpriseById(id);
  },
  methods: {
    getEnterpriseById(id) {
      enterpriseService
        .getById(id)
        .then((response) => {
          this.enterprise = new Enterprise(response.data);
          this.identificationWithMask = this.enterprise.identification;
        })
        .catch((error) => {
          console.log("Error trying to get enterprise by id: ");
          console.log(error);
        });
    },

    saveRegistration() {
      if (this.enterprise.modelInvalid()) {
        Message.information(
          "warning",
          "Invalid model",
          this.enterprise._invalidDescription
        );
        return;
      }

      if (this.enterprise.id == null) {
        enterpriseService
          .createEnterprise(this.enterprise)
          .then(() => {
            Message.information("success", "", "Successfull created");
            if (this.keepAdding) {
              this.enterprise = new Enterprise();
              this.identificationWithMask = "";
            } else {
              this.$router.push({ name: "Enterprises" });
            }
          })
          .catch((error) => {
            this.$swal({
              icon: "error",
              title: "Fail",
              text: error,
              animate: true,
            });
          });
        return;
      }

      enterpriseService
        .saveEnterprise(this.enterprise)
        .then(() => {
          this.$router.push({ name: "Enterprises" });
        })
        .catch((error) => Message.information("error", "Failure", error));
    },
    cancelRegistration() {
      this.$router.push({ name: "Enterprises" });
    },
  },
  watch: {
    identificationWithMask() {
      this.enterprise.identification = this.identificationWithMask
        .replaceAll(".", "")
        .replace("/", "")
        .replace("-", "");
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
