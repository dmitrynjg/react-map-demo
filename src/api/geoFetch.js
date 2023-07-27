import axios from 'axios';

export default function geoFetch(list = []) {
  return Promise.all(
    list.map((wayPoints, index) =>
      Promise.all(
        wayPoints.map((wayPoint) =>
          axios.get('https://nominatim.openstreetmap.org/reverse', {
            params: {
              lat: wayPoint.latitude,
              lon: wayPoint.longitude,
              format: 'json',
            },
          })
        )
      ).then((res) => ({
        id: index + 1,
        title: `Маршрут ${index + 1}`,
        points: res.map((pointResponse, index) => ({
          title: index === 0 ? 'Начало пути' : index === wayPoints.length - 1 ? 'Конец пути' : 'Остоновка',
          description: pointResponse.data.display_name,
          lat: pointResponse.data.lat,
          lon: pointResponse.data.lon,
        })),
      }))
    )
  ).catch(() => {
    throw new Error('Не удалось загрузить список маршрутов');
  });
}
