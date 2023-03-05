import { mount } from '@vue/test-utils'
import RenderlessPassword from "./RenderlessPassword";

function factory() {
    return mount(RenderlessPassword)
}

describe('renderless-password', () => {
    let wrapper = factory()
    it ('meets default requirements', async () => {
        const passwordInput = wrapper.find('#password')
        const newPassword = 'a very long password';

        await passwordInput.setValue(newPassword)
        expect(passwordInput.element.value).toBe(newPassword)

        const complexityField = wrapper.find('.complexity')
        console.log(Object.values(complexityField.element.classList))

        wrapper.vm.$nextTick(() => {
            expect(complexityField.element.classList).toContain('high')
        });
    })
    it ('adds the correct complexity class', async () => {
        const passwordInput = wrapper.find('#password')
        const newPassword = '';

        await passwordInput.setValue(newPassword)
        expect(passwordInput.element.value).toBe(newPassword)

        const complexityField = wrapper.find('.complexity')
        console.log(Object.values(complexityField.element.classList))

        wrapper.vm.$nextTick(() => {
            expect(complexityField.element.classList).toContain('high')
        });
    })
})