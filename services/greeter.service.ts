
import { ServiceSchema } from 'moleculer';

const GreeterService: ServiceSchema = {
  name: 'greeter',
  settings: {

  },
  dependencies: [],

  actions: {
    hello() {
      return 'Hello Moleculer';
    },

    welcome: {
      params: {
        name: 'string',
      },
      handler(ctx) {
        return `Welcome, ${ctx.params.name}`;
      },
    },
  },

  events: {

  },

  methods: {

  },

  created() {

  },
};

export = GreeterService;
