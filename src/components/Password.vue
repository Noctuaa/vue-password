<template>
    <div class="inputBox">
        <h1>Password generator</h1>
        <div class="input-group">
            <input :type="type" name="" v-model="password" placeholder="Create Password" id="password">
            <button class="btn-fa" @click="show">
                <font-awesome-icon v-if="display" class="fa" :icon="['fa', 'eye']" />
                <font-awesome-icon v-else class="fa" :icon="['fa', 'eye-slash']" />
            </button>
        </div>
        <button class="btn" @click="generate">Generate</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                password: '',
                display: false,
            }
        },

        methods: {
            show(){
                this.display = !this.display
            },
            /**
             * Generate Password
             * code ASCII min = 33, max = 126
             */
            generate() {
                this.password = '';
                let passwordLength = 16;
                for (let i = 0; i < passwordLength; i++) {
                    this.password += String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1) + 33));
                }
            },
        },

        computed:{
            /**
            * Change the input type to display the password according to the display state.
            * @returns {string} text or password
            */
            type(){
                return this.display ? 'text' : 'password'
            }
        }
    }
</script>

<style lang="scss">
    .input-group {
        position: relative;

        .btn-fa {
            position: absolute;
            right: 2px;
            top: 0px;
            cursor: pointer;
            height: 100%;
            font-size: 1rem;
            border: none;
            background-color: transparent;

            &:focus{
                outline: none;
            }
        }
    }
</style>>