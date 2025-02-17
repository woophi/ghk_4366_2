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

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [checkedItems, setCheckedItem] = useState({
    'Банкоматы и отделения': false,
    'Кэшбэк у партнёров': false,
    'Скидки с картой Альфа-Банка': false,
    'Альфа-Афиша': false,
    'Заправки с кэшбэком': false,
    'Культура и искусство': false,
  });

  const submitFinish = () => {
    setLoading(true);
    // LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
    setLoading(false);
  };
  const submit = () => {
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
          <img src={bottom} alt="bottom" height={168} width="100%" style={{ marginBottom: '-1rem' }} />
        </div>

        <div className={appSt.boxswitchers}>
          <Switch
            block
            reversed
            checked={checkedItems['Банкоматы и отделения']}
            label="Банкоматы и отделения"
            onChange={() =>
              setCheckedItem({ ...checkedItems, 'Банкоматы и отделения': !checkedItems['Банкоматы и отделения'] })
            }
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Кэшбэк у партнёров']}
            label="Кэшбэк у партнёров"
            onChange={() => setCheckedItem({ ...checkedItems, 'Кэшбэк у партнёров': !checkedItems['Кэшбэк у партнёров'] })}
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Скидки с картой Альфа-Банка']}
            label="Скидки с картой Альфа-Банка"
            onChange={() =>
              setCheckedItem({
                ...checkedItems,
                'Скидки с картой Альфа-Банка': !checkedItems['Скидки с картой Альфа-Банка'],
              })
            }
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Альфа-Афиша']}
            label="Альфа-Афиша"
            onChange={() => setCheckedItem({ ...checkedItems, 'Альфа-Афиша': !checkedItems['Альфа-Афиша'] })}
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Заправки с кэшбэком']}
            label="Заправки с кэшбэком"
            onChange={() => setCheckedItem({ ...checkedItems, 'Заправки с кэшбэком': !checkedItems['Заправки с кэшбэком'] })}
            className={appSt.switchItem}
          />
          <Switch
            block
            reversed
            checked={checkedItems['Культура и искусство']}
            label="Культура и искусство"
            onChange={() =>
              setCheckedItem({ ...checkedItems, 'Культура и искусство': !checkedItems['Культура и искусство'] })
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
            <ButtonMobile size="m" block view="primary" onClick={() => setError(false)}>
              Вернуться к выбору
            </ButtonMobile>
            <ButtonMobile size="m" block view="transparent" onClick={submitFinish}>
              Мне это не интересно
            </ButtonMobile>
          </SystemMessageMobile.Controls>
        </SystemMessageMobile>
      </PopupSheet>
    </>
  );
};
