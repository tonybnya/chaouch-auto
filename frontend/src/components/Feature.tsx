const Feature = ({ label, value }: { label: string; value: string }) => (
  <div className="text-muted-foreground">
    <p className="font-semibold text-gray-500">{label}</p>
    <p>{value}</p>
  </div>
);

export default Feature;
