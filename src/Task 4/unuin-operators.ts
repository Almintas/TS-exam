/*
  Union operator (Apjungimo operatorius) yra skirtas aprašytis tipus, kurie apjungia kelis kitus tipus
*/

// Union operatorius deklaruojant kintamajį
type Id = number | string;
const id1: Id = '1321354';
const id2: Id = 17;

const id3: number | string = 47;
const id4: number | string = 'asdasdas';

const id5: number | string | boolean = 47;
const id6: number | string | boolean = 'sdfsdfdsfsdf';
const id7: number | string | boolean = true;

// Union panaudojimas objektų tipuose

type User = {
  name: string,
  surname: string,
  email: string,
  role: 'ADMIN' | 'USER' | 'MODERATOR',
  mobile: string,
};

type Employee = {
  id: number | string,
  name: string,
  surname: string,
  position: 'Janitor' | 'CTO' | 'Programmer',
};

// Union panaudojimas funkcijos tipuose
type Call = (callee: User | string) => void;

const call: Call = (callee) => {
  if (typeof callee === 'string') {
    console.log('Skambinama:', callee);
  } else {
    console.log('Skambinama:', callee.mobile);
  }
}

// Union panaudojimas aprašant masyvus

const data1: Array<number | string> = [1, 5, 'burundukas', 8, 'siurprizas', 7];
//  data1 ir data2 tipai yra identiški.
const data2: (number | string)[] = [1, 5, 'burundukas', 8, 'siurprizas', 7];

type FlagOptions = (1 | 0)[] | boolean[];

const flags1: FlagOptions = [1, 1, 0, 0, 0, 1, 1];
const flags2: FlagOptions = [true, false, false, true, true];

//  Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Union operators - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
  type Accommodation = {
    type: 'House' | 'Flat',
    address: string,
  };
  type Car = {
    brand: string,
    model: string,
    transmission: 'Automatic' | 'Manual',
  };

  type Assets = Accommodation[] | Car[];
  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
  {
    const accommodation: Accommodation = {
      address: 'Kovo 11-osios gatve 200',
      type: 'FLat',
    };
    const accommodation1: Accommodation = {
      address: 'Svarainiu gatve 4000',
      type: 'House',
    };

    console.log({
      accommodation,
      accommodation1,
    })
  }
  console.groupEnd();

  console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
  {
    const car: Car = {
      brand: 'Audi',
      model: 'A8',
      transmission: 'Automatic',
    };
    const car1: Car = {
      brand: 'Bmw',
      model: 'M5',
      transmission: 'Manual',
    };
    console.log({
      car,
      car1,
    });
  }
  console.groupEnd();

  console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
  {
    const overAll: Assets = [{
      address: 'Kovo 11-osios 200',
      type: 'Flat',
    }, 
    {
      address: 'Svarainiu gatve 5000',
      type: 'House',
    }];
    const overAll1: Assets = [{
      brand: 'Audi',
      model: 'A8',
      transmission: 'Automatic',
    }, 
    {
      brand: 'Bmw',
      model: 'M5',
      transmission: 'Manual',
    }];

    console.log(overAll);

    console.log(overAll1);
  }
  console.groupEnd();

}
console.groupEnd();
