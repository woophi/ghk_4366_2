declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (e: 'event', v: string, data?: Record<string, string>) => void;
  }
}

type Payload = {
  ATM_alfa: 1 | 0;
  ATM_partners: 1 | 0;
  offices: 1 | 0;
  products: 1 | 0;
  cafe: 1 | 0;
  entertainment: 1 | 0;
  clothes: 1 | 0;
  house: 1 | 0;
  health: 1 | 0;
  places: 1 | 0;
  theatres: 1 | 0;
  standup: 1 | 0;
  master_classes: 1 | 0;
};

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycby2b_t3pbmbkE6n6VDTLWZtV04-LeBGY3hC_JDgx1JlRkzk8ux8AY6jeFmbE-Xdps7NbQ/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, ...payload, variant: 'variant2' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
