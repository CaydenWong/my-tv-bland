import React, { Fragment, useContext } from "react";
import { Listbox, Transition } from "@headlessui/react";
import countries from "../countries.json";
import classNames from "classnames";
import styles from "../styles/component.module.scss";
import { CountryContext } from "../pages/_app";

interface CountrySelectorProps {
  className: string;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ className }) => {
  const { country, setCountry } = useContext(CountryContext);
  return (
    <div className={classNames(styles.countrySelector__container, className)}>
      <label htmlFor="country" className={styles.countrySelector__label}>
        Select country:
      </label>
      <div className={styles.countrySelector__listbox}>
        <Listbox name="country" value={country} onChange={setCountry}>
          <Listbox.Button className={styles.countrySelector__button}>
            <span className={styles.countrySelector__button_name}>
              {countries[country]}
            </span>
            <i
              className={classNames(
                "fas fa-chevron-down",
                styles.countrySelector__button_icon
              )}
            />
          </Listbox.Button>
          <Transition as={Fragment}>
            <div className={styles.countrySelector__options__container}>
              <Listbox.Options className={styles.countrySelector__options}>
                {Object.keys(countries).map((code) => (
                  <Listbox.Option
                    key={code}
                    value={code}
                    className={({ active }) =>
                      classNames(
                        styles.countrySelector__option,
                        active && styles.countrySelector__option_active
                      )
                    }
                  >
                    {({ selected }) => (
                      <span
                        className={
                          selected
                            ? styles.countrySelector__option_selected
                            : ""
                        }
                      >
                        {countries[code]}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Transition>
        </Listbox>
      </div>
    </div>
  );
};

export default CountrySelector;
