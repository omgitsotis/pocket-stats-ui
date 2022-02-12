import Document, {Html, Head, Main, NextScript} from 'next/document';
const globalStyle = {
    __html: `
    body {
        background: #c72671; /* fallback for old browsers */
        background: linear-gradient(to bottom, #fff1eb, #ace0f9)
        no-repeat fixed; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .frame { background-color: #fff; }

    .level.fill-height {
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        display: -ms-flexbox;
        display: flex;
    }
`
};

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge;" />
          <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
         <script src="https://kit.fontawesome.com/ad19c7bae5.js" crossorigin="anonymous"></script>
          <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
          <style dangerouslySetInnerHTML={globalStyle} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
