<template>
  <div>
    <nav class="navbar-primary text-white mb-4">
      <div class="container">
        <h2 class="site-title">Shinobi CSS</h2>
        <p>A lightweight CSS library for dev ninjas</p>
      </div>
    </nav>
    <div class="container">
      <!-- colors -->
      <h2>Colors</h2>
      <span class="text-primary">primary text</span> |
      <span class="text-secondary">secondary text</span> |
      <span class="text-error">error text</span> |
      <span class="text-info">info text</span> |
      <span class="text-blue">blue text</span> |
      <span class="text-red">red text</span> |
      <span class="text-green">green text</span> |
      <span class="text-yellow">yellow text</span> |
      <span class="text-purple">purple text</span> |
      <span class="text-orange">orange text</span> |
      <span class="text-gray">gray text</span>

      <br><br>

      <span class="bg-primary text-white">bg primary</span> |
      <span class="bg-secondary text-white">bg secondary</span> |
      <span class="bg-error text-white">bg error</span> |
      <span class="bg-info text-white">bg info</span> |
      <span class="bg-blue text-white">bg blue</span> |
      <span class="bg-red text-white">bg red</span> |
      <span class="bg-green text-white">bg green</span> |
      <span class="bg-yellow text-white">bg yellow</span> |
      <span class="bg-purple text-white">bg purple</span> |
      <span class="bg-orange text-white">bg orange</span> |
      <span class="bg-gray text-white">bg gray</span> |

      <br><br>

      <span class="bg-primary-dark-8 text-white">primary dark 8</span> |
      <span class="bg-primary-dark-6 text-white">primary dark 6</span> |
      <span class="bg-primary-dark-4 text-white">primary dark 4</span> |
      <span class="bg-primary-dark-2 text-white">primary dark 2</span> |
      <span class="bg-primary text-white">primary</span> |
      <span class="bg-primary-light-2 text-white">primary light 2</span> |
      <span class="bg-primary-light-4 text-white">primary light 4</span> |
      <span class="bg-primary-light-6 text-white">primary light 6</span> |
      <span class="bg-primary-light-8 text-white">primary light 8</span> |

      <br><br>
      <a href="#" class="text-primary text-hover-orange-light-1">hover me</a>

      <!-- font sizes -->

      <!-- buttons -->
      <h2>Buttons</h2>
      <a href="#" class="btn">default btn</a>
      <a href="#" class="btn-primary text-white">click me</a>
      <a href="#" class="btn-secondary text-white">click me</a>
      <a href="#" class="btn-error text-white">click me</a>
      <a href="#" class="btn-info">click me</a>
      <a href="#" class="btn-outlined-purple text-purple text-hover-white">click me</a>
      <a href="#" class="btn-outlined-orange text-orange text-hover-white">click me</a>
      <a href="#" class="btn-complement-purple">click me</a>
      <a href="#" class="btn-complement-primary">click me</a>

      <!-- cards -->
      <h2>Cards</h2>
      <div class="card">
        <h1 class="card-title">This is a title</h1>
        <p class="card-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sunt, quo totam aliquam praesentium ducimus tempore sapiente quia nulla optio? Lorem ipsum, dolor sit amet consectetur <a href="">adipisicing elit</a>. Libero laboriosam laborum exercitationem autem commodi voluptas odio aliquid ut velit doloremque minima, quaerat dolores, corporis consequuntur totam nam id veniam maxime.</p>
      </div>

      <!-- grid system -->
      <h3 class="mb-2">Grid System</h3>
      <div class="row gap-2 justify-center">
        <div class="col-12-xs col-5-sm col-3-xl">
          <h3 class="card-title">Hello, ninjas</h3>
          <p class="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div class="col-12-xs col-5-sm col-3-xl">
          <h3 class="card-title">Hello, ninjas</h3>
          <p class="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div class="col-12-xs col-5-sm col-3-xl">
          <h3 class="card-title">Hello, ninjas</h3>
          <p class="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div class="col-12-xs col-5-sm col-3-xl">
          <h3 class="card-title">Hello, ninjas</h3>
          <p class="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <!-- utilities -->

    </div>
    <RenderlessPassword
        :input="input"
        :matching="matching"
        :complexity="complexity"
        :complexity-style="getComplexityStyle"
        :valid="valid"
        :min-complexity="minComplexity"
        @input-evt="handleEmit"
    >
      <template #default>

      </template>
    </RenderlessPassword>
    <tab-container v-model:activeTabId="activeTabId">
      <tab tabId="1">Tab #1</tab>
      <tab tabId="2">Tab #2</tab>
      <tab tabId="3">Tab #3</tab>
      <tab-content tabId="1">Content #1</tab-content> <tab-content tabId="2">Content #2</tab-content> <tab-content tabId="3">Content #3</tab-content>
    </tab-container>
  </div>
</template>

<script>
import RenderlessPassword from '../tests/unit/RenderlessPassword';
import Button from '@/components/Button.vue'
import { TabContent, Tab, TabContainer } from '@/components/tab';

export default {
  data() {
    return {
      input: {
        password: '',
        confirmation: ''
      },
      complexity: null,
      activeTabId: '1'
    }
  },
  components: {
    Button,
    RenderlessPassword,
    TabContent,
    Tab,
    TabContainer
  },
  mounted() {
    // alert(this.vm.$slots.default())
  },
  computed: {
    matching() {
      return isMatching(this.input.password, this.input.confirmation);
    },
    minComplexity() {
      return 3
    },
    getComplexityStyle() {
      return complexityStyle(this.input.password)
    },
    valid() {
      return this.complexity >= this.minComplexity && this.matching;
    }
  },
  methods: {
    handleEmit(evt) {
      const key = evt['key']
      const value = evt['value']

      switch (key) {
        case 'password':
          this.complexity = calcComplexity(value)
          this.input.password = value;
          break;
        case 'confirmation':
          this.input.confirmation = value;
          break;
        default:
          break;
      }


      // console.log(this.complexity)
    },
    complexityStyle() {
      return complexityStyle(this.complexity)
    }
  }
}

const complexityStyle = (complexity) => {
  if (complexity >= 3) {
    return 'high'
  }
  if (complexity >= 2) {
    return 'mid'
  }
  if (complexity >= 1) {
    return 'low'
  }
}

export function isMatching(password, confirmation) {
  if (!password || !confirmation) {
    return false;
  }
  console.log(password, confirmation)
  return password === confirmation;
}

export function calcComplexity(val) {
  let complexity;
  if (!val) {
    return 0
  }
  if (val.length >= 10) {
    return 3
  }
  if (val.length >= 7) {
    return 2
  }
  if (val.length >= 5) {
    return 1
  }
  if (val.length < 5) {
    return 'too short'
  }

}

</script>

<style lang="scss">
@import '../src/scss/index.scss';
.tabs {
  display: flex;
}
.tab {
  border: 1px solid;
  cursor: pointer;
  padding: 10px;
  width: 100px;
  text-align: center;
}
.tab:first-child {
  border-right: none;
}
.active {
  color: blue;
  border-bottom: 5px solid blue;
}
.content {
  margin: 10px;
  font-size: 1.5rem;
}

</style>