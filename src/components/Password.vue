<template>
    <div class="inputBox">
        <h1>Password generator</h1>
        <input type="password" name="" v-model="password" placeholder="Create Password" id="password">
        <button class="btn" @click="generate">Generate</button>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                password: ''
            }
        },

        methods: {
            /**
             * Generate Password
             * code ASCII min = 33, max = 126
             */
            generate(){
                this.password = '';
                let passwordLength = 16;
                for (let i = 0; i < passwordLength; i++) {                   
                    this.password += String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1) + 33));
                }
            }
        }
    }
</script>

<style>

</style>