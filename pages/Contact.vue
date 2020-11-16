<template>
  <v-card
    class="mx-auto contact-card"
  >
    <v-card-title class="title font-weight-regular">
      Contact me
    </v-card-title>
    <v-card-text>
      <p>문의사항이 있다면 아래 정보를 남겨주시면 신속하게 연락드리겠습니다</p>
    </v-card-text>
    <v-form
      ref="form"
      v-model="form"
      class="pa-6 pt-6"
    >
      <v-row>
        <v-text-field
          class="contact-card-tf mr-2"
          v-model="password"
          :rules="[rules.password, rules.length(6)]"
          filled
          color="deep-purple"
          counter="6"
          label="이름"
          style="min-height: 96px"
          type="text"
        />
        <v-text-field
          class="ml-2"
          v-model="email"
          :rules="[rules.email]"
          filled
          color="deep-purple"
          label="이메일"
          type="email"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          class="contact-card-tf"
          v-model="phone"
          filled
          color="deep-purple"
          label="연락처"
          counter="13"
        />
      </v-row>
      <v-row id="contact-contents-row">
        <v-select
          :items="problemType"
          label="Type of Contact"
          dense
        ></v-select>
        <v-textarea
          v-model="contents"
          auto-grow
          filled
          color="deep-purple"
          label="문의내용"
          rows="1"
          counter="2000"
        ></v-textarea>
      </v-row>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        text
        @click="$refs.form.reset()"
      >
        Clear
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="deep-purple accent-4"
        depressed
      >
        SEND
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    agreement: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    phone: undefined,
    rules: {
      email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        '영문',
      required: v => !!v || 'This field is required',
    },
    problemType : ['오류 문의', '요청&제안', '기타 문의'],
    contents : ''
  }),
}
</script>

<style scoped lang="scss">
.contact-card {
  max-width: 850px;
  .contact-card-tf {
    //margin-left: 20px;
  }
}
#contact-contents-row {
  display: flex;
  flex-direction: column;
}
</style>
