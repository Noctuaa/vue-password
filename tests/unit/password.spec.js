import {mount} from '@vue/test-utils';
import Password from '@/components/password.vue';

describe('Password', () => {

    let wrapper = mount(Password);

    it('Should set correct contents', () => {
        expect(wrapper.vm.password).toEqual('');
        expect(wrapper.vm.display).toBe(false);
    })

    describe('User clicks on the button to generate a random password', () => {

        it('Should generate a random password', () => {
            const mockMethod = jest.spyOn(Password.methods, 'generate')
            wrapper = mount(Password)
            wrapper.find('.btn').trigger('click');
            expect(mockMethod).toHaveBeenCalled();
            mockMethod.mockRestore();
        })

        it('Password must respect the pattern', () => {
            let pattern = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
            let password = wrapper.vm.password;
            for (let index = 0; index < password.length; index++) {
                const result = pattern.includes(password[index]);
                expect(result).toBe(true);
            }
        })

        it('Password must contain 16 characters', () => {
            const password = wrapper.vm.password;
            expect(password.length).toEqual(16);
        })
    })


    describe('User clicks on the display button', () => {

        const mockMethod = jest.spyOn(Password.methods, 'show')
        wrapper = mount(Password)
        let input;

        beforeEach(() => {
            input = wrapper.find('#password');
        })

        describe('To see the generated password', () => {
            it('Should update the state of display to see the password', () => {
                wrapper.find('.btn-fa').trigger('click');
                expect(mockMethod).toHaveBeenCalled();
                expect(wrapper.vm.display).toBe(true);
            })
    
            it('And change the input type to text', () => {
                expect(input.element.type).toEqual('text');
            }) 
        })

        describe('To hide password', () => {
            it('Should update the state of display to hide the password', () => {
                wrapper.find('.btn-fa').trigger('click');
                expect(mockMethod).toHaveBeenCalled();
                expect(wrapper.vm.display).toBe(false);
            })

            it('And change the input type to password', () => {
                expect(input.element.type).toEqual('password');
            }) 
        })
    })
})