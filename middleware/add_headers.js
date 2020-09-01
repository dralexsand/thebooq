export default function ({axios}) {
  axios.setHeader({
      common: [
        'api', 'apikey'
      ]
    }
  );
  console.log('Set apikey');
}
