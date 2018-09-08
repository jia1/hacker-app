import { EmailTemplates as email } from './email';
import { FacebookGroupPostTemplates as facebookGroupPost } from './facebookGroupPost';

const MessageTemplates = {
  email,
  facebookGroupPost
};

// Ref for export via index.js:
// https://stackoverflow.com/questions/34072598/es6-exporting-importing-in-index-file
// https://stackoverflow.com/questions/50113850/import-const-array-react
export {
  MessageTemplates
};
