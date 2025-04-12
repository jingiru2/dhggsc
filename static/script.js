// 예시 데이터 (실제 사용 시 여기에 모든 학생 정보를 추가)
const studentAccounts = [
  { id: '20230123', name: '홍수정', googleId: 'hong123@school.com', password: 'abcd1234' },
  { id: '20230124', name: '김명희', googleId: 'kimyh@school.com', password: 'pass2023' },
  { id: '20230125', name: '이철민', googleId: 'lee25@school.com', password: 'pw4567' }
];

document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const inputId = document.getElementById('student-id').value.trim();
  const inputName = document.getElementById('student-name').value.trim();

  const resultDiv = document.getElementById('result');
  const idSpan = document.getElementById('google-id');
  const pwSpan = document.getElementById('google-pw');

  const student = studentAccounts.find(
    (s) => s.id === inputId && s.name === inputName
  );

  if (student) {
    idSpan.textContent = student.googleId;
    pwSpan.textContent = student.password;
    resultDiv.classList.remove('hidden');
  } else {
    idSpan.textContent = '정보를 찾을 수 없습니다.';
    pwSpan.textContent = '';
    resultDiv.classList.remove('hidden');
  }
});
