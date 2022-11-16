import { mount } from '@vue/test-utils';
import { nextTick, reactive } from "vue";
import App from './App';
import { createStore } from 'vuex';

describe('App', () => {
  it('renders a profile link', () => {
    const wrapper = mount(App)
    expect(wrapper.find('#profile').text()).toBe('My Profile');
  });
  it('renders an admin link', () => {
    const wrapper = mount(App, {
      data() {
        return {
          admin : true
        }
      }
    });
    expect(wrapper.find('#admin').exists()).toBe(true);
  });
  it('does not render an admin link', () => {
    const wrapper = mount(App, {
      data() {
        return {
          admin : false
        }
      }
    });
    // expect(wrapper.find('#admin').exists()).not.toBe(true);
    expect(wrapper.find('#admin').isVisible()).not.toBe(true);
  });
});

// test('emits a count with correct payload', async () => {
//   const wrapper = mount (App);
//   wrapper.find('button').trigger('click');
//   console.log(wrapper.emitted().count[0][0]);
//   expect(wrapper.emitted().count[0][0]).toBe(1);
//   wrapper.find('button').trigger('click');
//   expect(wrapper.emitted().count[1][0]).toBe(2);
//   // console.log(wrapper.emitted());
// });

/*
const createVuexStore = () => {
  return  createStore({
    state() {
      return {
        count: 0
      }
    },
    mutations: {
      increment(state) {
        state.count += 1;
      }
    }
});
}


function factory() {
  const store = createVuexStore();
  return mount(App, {
    global: {
      plugins: [store],
      mocks: {
        $route: {
          params: {
            postId: 1
          }
        }
      },
      stubs: {
      }
    }
  });
}

let mockGet = jest.fn()
jest.mock('axios', () => ({
  get: () => mockGet()
}))

describe('App', () => {
  it('render count when even', async () => {
    const wrapper = factory();
    await wrapper.find('button').trigger('click');
    await wrapper.find('button').trigger('click');
    expect(wrapper.html()).toContain('Count: 2. Count is even');
  });
  it('render count when odd', async () => {
    const wrapper = factory();
    await wrapper.find('button').trigger('click');
    expect(wrapper.html()).toContain('Count: 1. Count is odd');
  });
});
*/
