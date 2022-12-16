import SignForm from '@/components/SignForm/SignForm';
import { useAppSelector } from '@/redux/hooks/redux';

export default function Home() {
  const authFormData = useAppSelector((state) => state.authFormData.value);

  if (authFormData.form === 'signin') {
    return <SignForm signin />;
  }
  return <SignForm />;
}
