import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { PopupSheet } from '@alfalab/core-components/popup-sheet';
import { Switch } from '@alfalab/core-components/switch';
import { SystemMessageMobile } from '@alfalab/core-components/system-message/mobile';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import bottom from './assets/bottom.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';
import { sendDataToGA } from './utils/events';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [checkedItems, setCheckedItem] = useState({
    'Банкоматы Альфа-Банка': false,
    'Банкоматы партнёров': false,
    'Офисы банка': false,
    'Магазины продуктов': false,
    'Кафе и рестораны': false,
    Развлечения: false,
    'Одежда и обувь': false,
    'Дом и ремонт': false,
    Здоровье: false,
    'Рекомендованные места': false,
    Театры: false,
    Стендап: false,
    'Мастер-классы': false,
  });

  const submitFinish = () => {
    setLoading(true);
    sendDataToGA({
      ATM_alfa: Number(checkedItems['Банкоматы Альфа-Банка']) as 1 | 0,
      ATM_partners: Number(checkedItems['Банкоматы партнёров']) as 1 | 0,
      offices: Number(checkedItems['Офисы банка']) as 1 | 0,
      products: Number(checkedItems['Магазины продуктов']) as 1 | 0,
      cafe: Number(checkedItems['Кафе и рестораны']) as 1 | 0,
      entertainment: Number(checkedItems['Развлечения']) as 1 | 0,
      clothes: Number(checkedItems['Одежда и обувь']) as 1 | 0,
      house: Number(checkedItems['Дом и ремонт']) as 1 | 0,
      health: Number(checkedItems['Здоровье']) as 1 | 0,
      places: Number(checkedItems['Рекомендованные места']) as 1 | 0,
      theatres: Number(checkedItems['Театры']) as 1 | 0,
      standup: Number(checkedItems['Стендап']) as 1 | 0,
      master_classes: Number(checkedItems['Мастер-классы']) as 1 | 0,
    }).then(() => {
      // LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };
  const submit = () => {
    window.gtag('event', '4371_continue_click_var1');

    if (Object.values(checkedItems).every(item => !item)) {
      setError(true);
      return;
    }

    submitFinish();
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Typography.TitleResponsive tag="h1" view="large" font="system" weight="semibold">
            Альфа-Места
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium">Выберите категории локаций, которые хотите видеть на карте</Typography.Text>
          <img src={bottom} alt="bottom" height={168} width="100%" style={{ marginBottom: '-1rem', objectFit: 'cover' }} />
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
          Банкоматы и офисы рядом
        </Typography.TitleResponsive>

        <div className={appSt.boxswitchers}>
          <Switch
            block
            reversed
            checked={checkedItems['Банкоматы Альфа-Банка']}
            label="Банкоматы Альфа-Банка"
            onChange={() =>
              setCheckedItem({ ...checkedItems, 'Банкоматы Альфа-Банка': !checkedItems['Банкоматы Альфа-Банка'] })
            }
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Банкоматы партнёров']}
            label="Банкоматы партнёров"
            onChange={() => setCheckedItem({ ...checkedItems, 'Банкоматы партнёров': !checkedItems['Банкоматы партнёров'] })}
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Офисы банка']}
            label="Офисы банка"
            onChange={() =>
              setCheckedItem({
                ...checkedItems,
                'Офисы банка': !checkedItems['Офисы банка'],
              })
            }
            className={appSt.switchItem}
          />
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
          Кэшбэк от партнёров
        </Typography.TitleResponsive>

        <div className={appSt.boxswitchers}>
          <Switch
            block
            reversed
            checked={checkedItems['Магазины продуктов']}
            label="Магазины продуктов"
            onChange={() => setCheckedItem({ ...checkedItems, 'Магазины продуктов': !checkedItems['Магазины продуктов'] })}
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Кафе и рестораны']}
            label="Кафе и рестораны"
            onChange={() => setCheckedItem({ ...checkedItems, 'Кафе и рестораны': !checkedItems['Кафе и рестораны'] })}
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Развлечения']}
            label="Развлечения"
            onChange={() => setCheckedItem({ ...checkedItems, Развлечения: !checkedItems['Развлечения'] })}
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Одежда и обувь']}
            label="Одежда и обувь"
            onChange={() => setCheckedItem({ ...checkedItems, 'Одежда и обувь': !checkedItems['Одежда и обувь'] })}
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Дом и ремонт']}
            label="Дом и ремонт"
            onChange={() => setCheckedItem({ ...checkedItems, 'Дом и ремонт': !checkedItems['Дом и ремонт'] })}
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Здоровье']}
            label="Здоровье"
            onChange={() => setCheckedItem({ ...checkedItems, Здоровье: !checkedItems['Здоровье'] })}
            className={appSt.switchItem}
          />
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
          Альфа-Афиша
        </Typography.TitleResponsive>

        <div className={appSt.boxswitchers}>
          <Switch
            block
            reversed
            checked={checkedItems['Рекомендованные места']}
            label="Рекомендованные места"
            onChange={() =>
              setCheckedItem({ ...checkedItems, 'Рекомендованные места': !checkedItems['Рекомендованные места'] })
            }
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Театры']}
            label="Театры"
            onChange={() => setCheckedItem({ ...checkedItems, Театры: !checkedItems['Театры'] })}
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Стендап']}
            label="Стендап"
            onChange={() =>
              setCheckedItem({
                ...checkedItems,
                Стендап: !checkedItems['Стендап'],
              })
            }
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Мастер-классы']}
            label="Мастер-классы"
            onChange={() =>
              setCheckedItem({
                ...checkedItems,
                'Мастер-классы': !checkedItems['Мастер-классы'],
              })
            }
            className={appSt.switchItem}
          />
        </div>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Продолжить
        </ButtonMobile>
      </div>

      <PopupSheet open={error} onClose={() => setError(false)} padding={0}>
        <SystemMessageMobile padding={32}>
          <SystemMessageMobile.Title>Вы ничего не выбрали</SystemMessageMobile.Title>

          <SystemMessageMobile.Subtitle>
            Вы можете выбрать любые полезные для вас инструменты управления финансами. Это бесплатно.
          </SystemMessageMobile.Subtitle>

          <SystemMessageMobile.Controls>
            <ButtonMobile
              size="m"
              block
              view="primary"
              onClick={() => {
                window.gtag('event', '4371_back_var2');
                setError(false);
              }}
              disabled={loading}
            >
              Вернуться к выбору
            </ButtonMobile>
            <ButtonMobile
              size="m"
              block
              view="transparent"
              onClick={() => {
                window.gtag('event', '4371_not_interested_var2');
                submitFinish();
              }}
              disabled={loading}
            >
              Мне это не интересно
            </ButtonMobile>
          </SystemMessageMobile.Controls>
        </SystemMessageMobile>
      </PopupSheet>
    </>
  );
};
