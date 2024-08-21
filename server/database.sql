CREATE TABLE car(
    id SERIAL PRIMARY KEY,
    model VARCHAR(100),
    image_url TEXT,
    car_availability VARCHAR(20),
    car_year VARCHAR (10),
    car_name VARCHAR(100),
    transmission  VARCHAR(20),
    engine_size VARCHAR(20),
    track_record VARCHAR(30),
    vehicle_description text,
    price VARCHAR(40)
);

INSERT INTO car (model, image_url, car_availability, car_year, car_name, transmission, engine_size, track_record, vehicle_description, price)
VALUES(
    'mercedes',
    'https://res.cloudinary.com/dcjinrx0q/image/upload/v1724056477/e250-2016_wce1lv.png',
    'Available',
    '2016',
    'Mercedes-Benz e250',
    'Automatic',
    '2000CC',
    'Kenyan Used',
    'There is nothing as beautiful as the grunt of a classic automobile engine. The 1997 Mercedes-Benz C200 embodies timeless 
    elegance and engineering excellence, offering a driving experience exhilarating. With its meticulous craftsmanship , 
    this classic beauty isnt just a car—its a statement. Own a piece of automotive history and experience the unmatched 
    charm of the Mercedes-Benz C200.',
    'KES 360000'
);

CREATE TABLE staff(
    id SERIAL PRIMARY KEY,
    staff_img TEXT,
    staff_name VARCHAR(100) NOT NULL,
    staff_description TEXT NOT NULL,
    role VARCHAR(100) NOT NULL
);

INSERT INTO staff (staff_img, staff_name, staff_description, role)
VALUES(
    'https://res.cloudinary.com/dcjinrx0q/image/upload/v1724228566/cd406602-5b49-4c53-9bed-8969f9ec195a.png',
    'Dwight Horward',
    'Dwight Horward is a seasoned executive with over 8 years of experience in the automotive industry. As CEO of
     Kai & Karo Motors, Kairo is responsible for setting the overall direction and strategy of the company. He
      is committed to ensuring that Kai & Karo Motors remains at the forefront of the industry, providing our
       customers with the best possible products and services.',
    'Founder/CEO'
)