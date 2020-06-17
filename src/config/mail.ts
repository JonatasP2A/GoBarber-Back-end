interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'diego@rocketseat.com.br', // colocar oq eu gerar quando fizer meu domínio
      name: 'Jonatas do GoBarber',
    },
  },
} as IMailConfig;
