import { render, fireEvent, screen } from '@testing-library/vue';
import { nextTick, reactive } from "vue";
import PostList from './PostList';
import store from '@/store'
import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'

// jest.mock('axios', () => {
//   post: () => Promise.resolve({
//     username: 'raza',
//     password: ''
//   })
// })

const mockPostList = [
  { id: 1, title: 'title1'},
  { id: 2, title: 'title2'}
]

// tell jest to mock any call to axios.get and return mockPostList
jest.spyOn(axios, 'get').mockResolvedValue(mockPostList)

test('loads posts on button click', async () => {
  const wrapper = mount(PostList);

  await wrapper.get('button').trigger('click')

  // assert we've called axios.get the right amount of times and with the right parameters
  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith('/api/posts')

  // wait till DOM updates
  await flushPromises()

  const posts = wrapper.findAll('[data-test="post"]')

  expect(posts).toHaveLength(2)
  expect(posts[0].text()).toContain('title1')
  expect(posts[1].text()).toContain('title2')
})

test('displays loading state on button click', async () => {
  const wrapper = mount(PostList);

  // not loading, expect no alert and button to be enabled
  expect(wrapper.find('[role="alert"]').exists()).toBe(false)
  expect(wrapper.get('button').attributes()).not.toHaveProperty('disabled')

  await wrapper.get('button').trigger('click')

  // loading, expect alert and button to be disabled
  expect(wrapper.find('[role="alert"]').exists()).toBe(true)
  expect(wrapper.get('button').attributes()).toHaveProperty('disabled')

  // wait till DOM updates
  await flushPromises()

  // not loading, expect no alert and button to be enabled
  expect(wrapper.find('[role="alert"]').exists()).toBe(false)
  expect(wrapper.get('button').attributes()).not.toHaveProperty('disabled')
})



// describe('App', () => {
//   xit('renders a profile link', () => {
//     const wrapper = mount(App)
//     expect(wrapper.find('#profile').text()).toBe('My Profile');
//   });
//   xit('renders an admin link', () => {
//     const wrapper = mount(App, {
//       data() {
//         return {
//           admin : true
//         }
//       }
//     });
//     expect(wrapper.find('#admin').exists()).toBe(true);
//   });
//   xit('does not render an admin link', () => {
//     const wrapper = mount(App, {
//       data() {
//         return {
//           admin : false
//         }
//       }
//     });
//     // expect(wrapper.find('#admin').exists()).not.toBe(true);
//     expect(wrapper.find('#admin').isVisible()).not.toBe(true);
//   });
// });

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
